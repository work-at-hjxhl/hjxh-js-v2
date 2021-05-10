import {fetchPddUserInfoFromCookie} from "../pdd_client";
import {DEFAULT_USER_AGENT} from "../../../hjxh-frontend/src/const";
import {PddUserInfo} from "../../../hjxh-frontend/src/interface/pdd_user_info";

const cookie =
"// Semicolon separated Cookie File\n" +
  "// This file was generated by EditThisCookie\n" +
  "// Details: http://www.ietf.org/rfc/rfc2109.txt\n" +
  "// Example: http://www.tutorialspoint.com/javascript/javascript_cookies.htm\n" +
  "_a42=df552f73-837f-4f3b-b6d6-daab56e1475f;_bee=mLLOM787pQqYMhi6wD9d71HSSnvO7WDU;_crr=mLLOM787pQqYMhi6wD9d71HSSnvO7WDU;_f77=82a7b8df-f39a-4a30-bbf1-3acf41c41ef0;api_uid=rBS4C2CQtUwhAj7AwtbGAg==;rcgk=mLLOM787pQqYMhi6wD9d71HSSnvO7WDU;rckk=mLLOM787pQqYMhi6wD9d71HSSnvO7WDU;ru1k=82a7b8df-f39a-4a30-bbf1-3acf41c41ef0;ru2k=df552f73-837f-4f3b-b6d6-daab56e1475f;_nano_fp=XpExX09bn5Xqn0TqXo_25fgy3t~P~Byi8HjAG9Ob;JSESSIONID=6A22828708D8B6797EDADF314C7C7BAC;mms_b84d1838=120,3397,1202,1203,1204,1205;PASS_ID=1-1q6Pa/zKPvgyw9jZe7GaGO10PBC5WsJ6ax9oSkP6zArn1oIAHmPSQyMmwqa2IeBR+GrbAoCYyq9vi377L6M1wg_794577079_95491555;webp=true;x-visit-time=1620357128049;"

const userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.11 Safari/537.36'

fetchPddUserInfoFromCookie(cookie, userAgent).then((e: PddUserInfo) => {
  console.log(e)
})