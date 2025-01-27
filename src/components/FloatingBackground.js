import React from 'react';
import { Code2, Terminal, Database, GitBranch, Cpu, Server, Binary, Braces, Blocks } from 'lucide-react';

function FloatingElement({ children, className, id }) {
    return (
        <div id={id} className={`absolute ${className}`}>
            {children}
        </div>
    );
}

export function FloatingBackground() {
    return (
        <div className="absolute inset-0">
            <FloatingElement
                id="icon-code"
                className="animate-float-slow top-20 left-[10%] text-[#38F1B9]/20"
            >
                <Code2 size={80} className="sm:w-[120px] sm:h-[120px]" />
            </FloatingElement>
            <FloatingElement
                id="icon-terminal"
                className="animate-float-medium bottom-20 left-[5%] text-[#38F1B9]/20"
            >
                <Terminal size={100} className="sm:w-[150px] sm:h-[150px]" />
            </FloatingElement>
            <FloatingElement
                id="icon-database"
                className="animate-float-fast -top-10 right-[15%] text-[#38F1B9]/20"
            >
                <Database size={70} className="sm:w-[100px] sm:h-[100px]" />
            </FloatingElement>
            <FloatingElement
                id="icon-git"
                className="animate-float-medium top-[60%] right-[20%] text-[#38F1B9]/20"
            >
                <GitBranch size={90} className="sm:w-[130px] sm:h-[130px]" />
            </FloatingElement>
            <FloatingElement
                id="icon-cpu"
                className="animate-float-slow bottom-[30%] right-[5%] text-[#38F1B9]/20"
            >
                <Cpu size={80} className="sm:w-[110px] sm:h-[110px]" />
            </FloatingElement>
            <FloatingElement
                id="icon-server"
                className="animate-float-fast top-[40%] left-[20%] text-[#38F1B9]/20"
            >
                <Server size={60} className="sm:w-[90px] sm:h-[90px]" />
            </FloatingElement>
            <FloatingElement
                id="icon-python"
                className="animate-float-medium bottom-[10%] right-[35%] text-[#38F1B9]/20"
            >
                <Binary size={85} className="sm:w-[125px] sm:h-[125px]" />
            </FloatingElement>
            <FloatingElement
                id="icon-react"
                className="animate-float-slow top-[50%] left-[45%] text-[#38F1B9]/20"
            >
                <Braces size={95} className="sm:w-[135px] sm:h-[135px]" />
            </FloatingElement>
            <FloatingElement
                id="icon-go"
                className="animate-float-fast top-[30%] right-[45%] text-[#38F1B9]/20"
            >
                <Blocks size={75} className="sm:w-[115px] sm:h-[115px]" />
            </FloatingElement>
        </div>
    );
}