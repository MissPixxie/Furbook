import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Alert } from "react-native";
import IP from "../../fetchIP";
import { AuthContext } from "../context/AuthContext";
import { Date } from "mongoose";

export interface Dogs {
  _id: string;
  name: string;
  age: number;
  sex: string;
  breed: string;
  neutered: boolean;
  images?: string;
  friends?: string;
  owner: string;
}
