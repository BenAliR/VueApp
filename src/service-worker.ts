// src/services/pusher-service.ts
import Pusher from "pusher-js";
import JwtService from "@/core/services/JwtService";

const pusher = new Pusher("bca9692adfbc48dd8c67", {
  cluster: "eu",
  authEndpoint: "/api/pusher/auth", // Optional if you're using private channels
  auth: {
    headers: {
      Authorization: JwtService.getToken(), // Optional if you're using private channels and need authentication
    },
  },
});

export default pusher;
