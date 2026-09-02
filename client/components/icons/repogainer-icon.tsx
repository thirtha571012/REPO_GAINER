import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

type DevPilotIconProps = SVGProps<SVGSVGElement> & {
  variant?: "color" | "mono";
};

export function DevPilotIcon({
  className,
  variant = "color",
  ...props
}: DevPilotIconProps) {
  const isMono = variant === "mono";
  const iconFill = isMono ? "currentColor" : "#FFFFFF"; // High contrast graphic

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...props}
    >
      {/* 
        Original rounded square base.
        Using the provided #0F172A for the non-mono base, which was likely the 'black screen' issue.
        In mono mode, this is currentColor.
      */}
      <rect
        width="64"
        height="64"
        rx="14"
        fill={isMono ? "currentColor" : "#0F172A"} // This was causing the visibility issue; adjusted logic below for internal graphic
      />

      {/* 
        New, vibrant visual graphic for 'RepoGainer'.
        This combines a stylized repository folder icon (code brackets shape)
        integrated with a distinct upward-pointing growth arrow.
        Rendered in high-contrast #FFFFFF (silver-gray) against the dark background.
      */}
      <path
        d="M26 12C24.8954 12 24 12.8954 24 14V17C24 17.5523 24.4477 18 25 18H37C37.5523 18 38 17.5523 38 17V14C38 12.8954 37.1046 12 36 12H26Z"
        fill={iconFill}
      />
      <path
        d="M17 18V50C17 51.1046 17.8954 52 19 52H28.783C29.231 52 29.6644 51.8491 30.0102 51.564L41.3323 42.2348C41.7656 41.8767 42.4173 41.916 42.8023 42.3243L46.6026 46.3683C47.3828 47.1983 48.745 46.8587 49.0494 45.7655L52.8808 31.9142C53.0768 31.1895 52.4839 30.5 51.7297 30.5H37.2023C36.1416 30.5 35.7588 31.8475 36.6343 32.4497L41.4287 35.7468C41.8153 36.0125 41.9547 36.5057 41.7618 36.9248L37.8986 45.3197C37.5855 46.0001 36.7842 46.262 36.1415 45.8954L19.2144 36.1824C18.4988 35.7721 18.0645 35.0112 18.0645 34.1856V20C18.0645 18.8954 18.9599 18 20.0645 18H21C21.5523 18 22 17.5523 22 17V16C22 14.8954 21.1046 14 20 14H19C17.8954 14 17 14.8954 17 16V18Z"
        fill={iconFill}
      />
    </svg>
  );
}