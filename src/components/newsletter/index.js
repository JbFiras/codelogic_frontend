import React, { useState } from "react";
import dynamic from "next/dynamic"; // Dynamically import components
import animationDataCelebration from "./newsletter_celebration.json";
import animationDataRightSide from "./newsletter_right_section.json";
import AnimatedButton from "@/components/Buttons/AnimatedButton";
import { api } from "@/services/axios";
import { toast } from "react-toastify";
import NewsletterBanner from "@/components/newsletter/banner/newsletterBanner";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function Newsletter() {
  const [animationVisible, setAnimationVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showAnimation = () => {
    setAnimationVisible(true); // Show the animation
    setTimeout(() => {
      setAnimationVisible(false); // Hide the animation after 3 seconds
    }, 3000);
  };

  const fetchCsrfToken = async () => {
    try {
      const response = await api.get("/csrf-token", {
        withCredentials: true, // Include cookies
      });
      return response?.data?.csrf_token;
    } catch (error) {
      console.error("Error fetching CSRF token:", error);
      return null;
    }
  };

  const handleSubscribe = async () => {
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);
    if (!email) {
      toast.warn("Email is required");
      setIsSubmitting(false);
      return;
    }
    try {
      const csrfToken = await fetchCsrfToken();
      if (!csrfToken) {
        toast.warn("Something went wrong, please try again.");
        setTimeout(() => {
          setIsSubmitting(false);
        }, 4000); // 4000ms = 4 seconds
        return;
      }

      const response = await api.post(
          "email-subscription",
          { email_address: email },
          {
            headers: {
              "X-CSRF-TOKEN": csrfToken,
            },
          }
      );

      if (response.status === 201) {
        setTimeout(() => {
          setIsSubmitting(false);
        }, 4000); // 4000ms = 4 seconds
        showAnimation(); // Trigger the celebration animation
        toast.success("Email added successfully.");
        setEmail(""); // Clear the email input
      }
    } catch (error) {
      if (error?.response?.status === 409) {
        setTimeout(() => {
          setIsSubmitting(false);
        }, 4000); // 4000ms = 4 seconds
        toast.warn("Your Email is already subscribed!");
      } else {
        setTimeout(() => {
          setIsSubmitting(false);
        }, 4000); // 4000ms = 4 seconds
        toast.error("Something went wrong, please try again.");
      }
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 4000); // 4000ms = 4 seconds
    }
  };

  return (
      <>
        <NewsletterBanner />
        <div className="container">
          <div className="row p-5">
            <div className="col-lg-8 col-md-12 col-sm-12 mb-4">
              <h1 className="text-center text-lg-start">
                SUBSCRIBE TO OUR{" "}
                <span style={{ color: "#38F1B9" }}>NEWSLETTER </span>!{" "}
              </h1>
              <p className="text-white mb-4 text-center text-lg-start">
                You will never miss important product updates, latest news, and
                community QA sessions.
              </p>
              <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubscribe();
                  }}
              >
                <div className="d-flex flex-column flex-lg-row align-items-center">
                  <div className="col-lg-8 col-12 mb-3 mb-lg-0 me-lg-3 px-3 px-lg-0">
                    <input
                        type="email"
                        name="newsletter_email"
                        id="newsletter_email"
                        className="form-control w-100"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                    />
                  </div>
                  <div className="position-relative">
                    {animationVisible && (
                        <div
                            className="position-absolute start-50 translate-middle"
                            style={{ zIndex: 1000 }}
                        >
                          <Lottie
                              animationData={animationDataCelebration}
                              loop={true}
                              autoplay={true}
                          />
                        </div>
                    )}
                    <AnimatedButton
                        type="submit"
                        text="Subscribe to our newsletter"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
              <div className="position-relative text-center">
                <Lottie
                    animationData={animationDataRightSide}
                    loop={true}
                    autoplay={true}
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "auto",
                    }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
