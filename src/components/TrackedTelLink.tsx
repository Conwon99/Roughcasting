import type { ReactNode } from "react";
import { usePhoneTracking } from "@/hooks/usePhoneTracking";
import { trackPhone } from "@/utils/analytics";

type PhoneFormat = "international" | "local";

interface TrackedTelLinkProps {
  className?: string;
  children?: ReactNode;
  showPhoneNumber?: boolean;
  phoneFormat?: PhoneFormat;
  prefix?: string;
  trackingLocation?: string;
}

export const TrackedTelLink = ({
  className = "",
  children,
  showPhoneNumber = false,
  phoneFormat = "local",
  prefix = "",
  trackingLocation,
}: TrackedTelLinkProps) => {
  const { telHref, displayPhone, displayPhoneLocal } = usePhoneTracking();

  const handleClick = () => {
    if (trackingLocation) {
      trackPhone(trackingLocation);
    }
  };

  const label = showPhoneNumber
    ? `${prefix}${phoneFormat === "local" ? displayPhoneLocal : displayPhone}`
    : children;

  return (
    <a href={telHref} className={className} onClick={handleClick}>
      {label}
    </a>
  );
};
