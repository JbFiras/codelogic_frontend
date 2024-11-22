import React, { useState } from "react";
import dynamic from "next/dynamic"; // Dynamically import components
import animationDataCelebration from "./newsletter_celebration.json";
import animationDataRightSide from "./newsletter_right_section.json";
import AnimatedButton from "@/components/Buttons/AnimatedButton";
import {api} from "@/services/axios";
import { toast } from 'react-toastify';
import NewsletterBanner from "@/components/newsletter/banner/newsletterBanner";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function Newsletter() {
  const [animationVisible, setAnimationVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showAnimation = () => {
    setAnimationVisible(false);
    setTimeout(() => {
      setAnimationVisible(true);
    }, 0.1);
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
    setIsSubmitting(true)
    if (!email) {
      toast.warn("Email is required")
      console.log("Email is required");
      return;
    }
    try {
      const csrfToken = await fetchCsrfToken();
      if (!csrfToken) {
        setIsSubmitting(false)
        toast.warn("Something went wrong, please try again.")
        console.log("Something went wrong, please try again.");
        return;
      }
      const response = await api.post("email-subscription", {"email_address":email,}, {
        headers: {
          "X-CSRF-TOKEN": csrfToken,
        },
      });
      console.log("response status !!!", response?.status);
      if (response.status === 201) {
        showAnimation();
        toast.success("Email added successfully.")
        setIsSubmitting(false)
      }
    } catch (error) {
     if (error?.status === 409) {
      setIsSubmitting(false)
      toast.warn("Your Email is already subscribed!")
    }
    else {
      toast.error("Something went wrong, please try again.")
      setIsSubmitting(false)
     }
  }}
  return (
      <>
        <NewsletterBanner/>
        <div className="container mt-5">
          <div className="row p-5">
            <div className="col-lg-8 col-md-12 col-sm-12 mb-4">
              <h1 className="text-center text-lg-start">
                SUBSCRIBE TO OUR{" "}
                <span style={{color: "#38F1B9"}}>NEWSLETTER </span>!{" "}
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
                  {/* Modified this div's classes and added px-3 for mobile padding */}
                  <div className="col-lg-8 col-12 mb-3 mb-lg-0 me-lg-3 px-3 px-lg-0">
                    <input
                        type="email"
                        name="newsletter_email"
                        id="newsletter_email"
                        className="form-control w-100" // Added w-100 to ensure full width
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                        disabled={isSubmitting}
                        style={{
                          fontSize: "1rem",
                          padding: "0.75rem",
                        }}
                    />
                  </div>
                  <AnimatedButton
                      type="submit"
                      text="Subscribe to our newsletter"
                      className="btn btn-primary"
                  />
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
              <div className="position-relative text-center">
                <Lottie
                    animationData={animationDataRightSide}
                    loop={true}
                    autoplay={true}
                />
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
