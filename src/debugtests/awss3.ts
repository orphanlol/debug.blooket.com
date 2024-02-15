import { testFetch } from "./fetchtester";

export const AWSS3Test = {
  title: "AWS S3",
  desc: "Used to load some 1st party application images and icons.",
  fix: "Please whitelist *.amazonaws.com in your network firewall settings.",
  test: testFetch(
    "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/lightBlueBlook.svg",
    [200],
  ),
};
