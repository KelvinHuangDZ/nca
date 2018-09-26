import { sportsNewsUrl } from "../config.json";
import axios from 'axios';

export function getSportNews() {
  return axios.get(sportsNewsUrl);
}
