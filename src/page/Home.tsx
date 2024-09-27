import { useMediaQuery } from "react-responsive";
import { MobileComponent } from "./MobileComponent";
import { DesktopComponent } from "./DesktopComponent";

export const HomePage = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    console.log('Is Mobile:', isMobile);
  return (
       <div>
         {isMobile ? <MobileComponent /> : <DesktopComponent />}
      </div>
  );
};