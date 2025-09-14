//Components
import PrivacyPolicyComponent from "@/components/menu/privacyPolicyComponent/privacyPolicyComponent";

// Types
import { Metadata } from "next";

const PrivacyPolicyPage: React.FC = async () => {
  return <PrivacyPolicyComponent />;
};

export default PrivacyPolicyPage;

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
};
