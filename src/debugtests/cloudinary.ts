import { errors } from "blooket-frontend-tools";
import debugbackend from "../debugbackend";
import { testFetch } from "./fetchtester";

export const CloudinaryUploadTest = {
  title: "Cloudinary",
  desc: "Used to store image and audio content uploaded by users",
  fix: "Whitelist api.cloudinary.com and media.blooket.com in your network firewall rules.",
  test: async () => {
    try {
      const keyres = await debugbackend.cloudinaryKey({});
      const cloudinaryAPIKey = keyres.cloudinaryApiKey;
      if (!cloudinaryAPIKey) {
        console.error("cannot proceed without valid cloudinaryAPIKey");
        return false;
      }

      // create an empty png file to upload
      const imageBlob = await new Promise<Blob>((resolve, reject) => {
        let canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = 1;
        canvas.toBlob((b: Blob | null) => {
          if (b) {
            resolve(b);
          } else {
            reject();
          }
        }, "image/png");
      });

      const timestamp = `${Date.now() / 1000}`;

      const formData = new FormData();
      formData.append("file", imageBlob);
      formData.append("tags", "");
      formData.append("upload_preset", "normal");
      formData.append("api_key", cloudinaryAPIKey); // TODO from backend
      formData.append("timestamp", timestamp);

      const opts = {
        method: "POST",
        body: formData,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      };

      const cloudinaryURL =
        "https://api.cloudinary.com/v1_1/blooket/image/upload";
      const res = await fetch(cloudinaryURL, opts);
      const data = await res.json();

      if (!data) {
        return false;
      }

      const downloadURL = data.secure_url;
      if (!downloadURL) {
        return false;
      }

      const downloadWorked = await testFetch(downloadURL, [200])();
      return downloadWorked;
    } catch (e) {
      console.error("running cloudinary test", e);
      errors.logError("running cloudinary test", e);
      return false;
    }
  },
};
