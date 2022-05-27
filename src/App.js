import "./styles.css";
import GooglePicker from "react-google-picker";
import { FaGoogle } from "react-icons/fa";
export default function App() {
  const CLIENT_ID =
    "492190163132-kgj16ecb2da4s32livg95b40n36bfl64.apps.googleusercontent.com";
  const API_KEY = "AIzaSyAf6aHjqTYW2-9K57xgIpf-WwJRvRjLsAs";
  const APP_ID = "arched-bot-311203";
  const scope = [
    "https://www.googleapis.com/auth/drive.readonly",
    "https://www.googleapis.com/auth/drive.photos.readonly"
  ];
  return (
    <div className="App">
      <GooglePicker
        clientId={CLIENT_ID}
        developerKey={API_KEY}
        scope={scope}
        onAuthFailed={this.onAuthFail}
        navHidden
        mimeTypes={["image/png", "image/jpeg", "image/jpg"]}
        createPicker={(google, oauthToken) => {
          const picker = new google.picker.PickerBuilder()
            .addView(new google.picker.View(google.picker.ViewId.DOCS_IMAGES))
            .addView(new google.picker.DocsUploadView())
            .setOAuthToken(oauthToken)
            .setDeveloperKey(API_KEY)
            .setAppId(APP_ID)
            .setCallback((data) => {
              if (data.action === google.picker.Action.PICKED) {
                var fileId = data.docs[0].id;
                alert("The user selected: " + fileId);
              }
            })
            .enableFeature(google.picker.Feature.NAV_HIDDEN)
            .enableFeature(google.picker.Feature.MULTISELECT_ENABLED);

          picker.build().setVisible(true);
        }}
      >
        <button>
          <FaGoogle color="red" /> Continue with google
        </button>
      </GooglePicker>
    </div>
  );
}
