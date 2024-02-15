import { testFetch } from "./fetchtester";

export const UnsplashAccessTest = {
  title: "Unsplash",
  desc: "Used to view Unsplash.com images",
  fix: "Whitelist *.unsplash.com in your network firewall rules",
  test: testFetch(
    "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NjkzOH0",
    [200],
  ),
};
