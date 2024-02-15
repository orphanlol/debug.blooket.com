import { errors } from "blooket-frontend-tools";
import debugbackend from "../debugbackend";
import { testFetchMany } from "./fetchtester";

export const BlooketEndpointsTest = {
  title: "*.blooket.com",
  desc: "Various Blooket services run on subdomains of blooket.com.",
  fix: "Please whitelist *.blooket.com in your firewall settings.",
  test: async () => {
    try {
      const res = await debugbackend.parentDomain({});
      const parentDomain = res.domain;
      if (!parentDomain) {
        console.error("cannot proceed without parentDomain");
        return false;
      }

      return await testFetchMany(
        [
          { url: `https://id.${parentDomain}/debug-test`, credentials: true },
          {
            url: `https://dashboard.${parentDomain}/debug-test`,
            credentials: true,
          },
          { url: `https://play.${parentDomain}/debug-test`, credentials: true },
          { url: `https://fb.${parentDomain}/debug-test`, credentials: true },
          { url: `https://s.${parentDomain}/debug-test`, credentials: true },
          {
            url: `https://media.blooket.com/image/upload/v1556829562/Blooks/chick.svg`,
            credentials: false,
          },
          {
            url: `https://monsterbrawl.${parentDomain}/debug-test`,
            credentials: true,
          },
          {
            url: `https://goldquest.${parentDomain}/debug-test`,
            credentials: true,
          },
          {
            url: `https://cryptohack.${parentDomain}/debug-test`,
            credentials: true,
          },
          {
            url: `https://fishingfrenzy.${parentDomain}/debug-test`,
            credentials: true,
          },
          {
            url: `https://deceptivedinos.${parentDomain}/debug-test`,
            credentials: true,
          },
          {
            url: `https://blookrush.${parentDomain}/debug-test`,
            credentials: true,
          },
          {
            url: `https://battleroyale.${parentDomain}/debug-test`,
            credentials: true,
          },
          {
            url: `https://towerdefense.${parentDomain}/debug-test`,
            credentials: true,
          },
          {
            url: `https://towerdefense2.${parentDomain}/debug-test`,
            credentials: true,
          },
          { url: `https://cafe.${parentDomain}/debug-test`, credentials: true },
          {
            url: `https://factory.${parentDomain}/debug-test`,
            credentials: true,
          },
          {
            url: `https://racing.${parentDomain}/debug-test`,
            credentials: true,
          },
          {
            url: `https://crazykingdom.${parentDomain}/debug-test`,
            credentials: true,
          },
          {
            url: `https://towerofdoom.${parentDomain}/debug-test`,
            credentials: true,
          },
          {
            url: `https://classic.${parentDomain}/debug-test`,
            credentials: true,
          },
          {
            url: `https://santasworkshop.${parentDomain}/debug-test`,
            credentials: true,
          },
        ],
        [200],
      )();
    } catch (e) {
      console.error("running blooket endpoints test", e);
      errors.logError("running blooket endpoints test", e);
      return false;
    }
  },
};
