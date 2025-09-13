//Components
import AboutUsComponent from "@/components/menu/aboutUsComponent/aboutUsComponent"

// Types
import { Metadata } from "next"

const AboutUsPage: React.FC = async () => {
  return <AboutUsComponent />
}

export default AboutUsPage

export const metadata: Metadata = {
  title: "نبذه عنا",
}
