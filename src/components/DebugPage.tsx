import React from "react";

import StandardTestComponent from "./StandardTestComponent";
import { WebsocketsTest } from "../debugtests/websockets";
import { LocalStorageTest } from "../debugtests/localstorage";
import { FontAwesomeAccessTest } from "../debugtests/fontawesome";
import { UnsplashAccessTest } from "../debugtests/unplash";
import WAFTestComponent from "./WAFTestComponent";
import BlooketServicesTestComponent from "./BlooketServicesTestComponent";

import "./DebugPage.css";
import FirebaseTestComponent from "./FirebaseTestComponent";
import { CloudinaryUploadTest } from "../debugtests/cloudinary";
import { StripeTest } from "../debugtests/stripe";
import { GoogleTest } from "../debugtests/google";
import { AWSS3Test } from "../debugtests/awss3";
import { CookiesTest } from "../debugtests/cookies";
import RecaptchaTestComponent from "./RecaptchaTestComponent";

const DebugPage = () => {
  return (
    <div className="debug-outer">
      <div className="main-header">System Debug Checks</div>

      <div className="debug-page-instructions">
        This page can be used to debug interoperability between Blooket and your
        school's device and network settings. If any of the tests below fail,
        contact your school’s tech department with this page so that they can
        change the necessary browser or network firewall settings.
        <div className="debug-page-emphasis">
          If these tests pass, but something is still not working for you,
          contact us with a description of the problem and a screenshot of the
          <a
            href="https://www.google.com/search?q=open+browser+console"
            target="_blank"
            rel="noreferrer"
          >
            browser console
          </a>
          so we can help resolve the issue.
        </div>
      </div>

      <div className="category-title">Browser Settings</div>
      <div className="category-desc">
        Blooket uses these features of browsers. Please make sure they are
        enabled.
      </div>

      <StandardTestComponent test={WebsocketsTest} />
      <StandardTestComponent test={LocalStorageTest} />
      <StandardTestComponent test={CookiesTest} />

      <div className="category-title">
        Firewall Checks - 1st Party Infrastructure
      </div>
      <div className="category-desc">
        Our primary hosting services are deployed primarily through subdomains
        of blooket.com. Please make sure you have whitelisted these URLs.
      </div>

      <WAFTestComponent />
      <BlooketServicesTestComponent />
      <StandardTestComponent test={AWSS3Test} />

      <div className="category-title">Firewall Checks - 3rd Party Services</div>
      <div className="category-desc">
        Please additionally whitelist the following services in any network
        firewall settings.
      </div>

      <StandardTestComponent test={GoogleTest} />
      <RecaptchaTestComponent />
      <FirebaseTestComponent />
      <StandardTestComponent test={StripeTest} />
      <StandardTestComponent test={FontAwesomeAccessTest} />
      <StandardTestComponent test={UnsplashAccessTest} />
      <StandardTestComponent test={CloudinaryUploadTest} />

      <div className="debug-disclaimer">
        Please note that the Internet is a dynamic system and while these checks
        are necessary for Blooket's proper functioning, they may not be
        sufficient. Our 3rd party services sometimes change implementations to
        use different URLs, and school IT departments sometimes change settings
        that have inadvertent consequences. If you believe there's something
        about your environment we should add to these checks, please let us
        know!
      </div>
    </div>
  );
};

export default DebugPage;
