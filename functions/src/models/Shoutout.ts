import { ObjectId } from "mongodb";

export default interface Shoutout {
  _id?: ObjectId;
  to: string;
  from: string;
  text: string;
  photoURL?: string; //add to frontend
  shoutoutImg?: string; // file upload -- alien ex
}
