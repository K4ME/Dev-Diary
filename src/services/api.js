import axios from "axios";

//const DevDiaryApiUrl = "https://localhost:7099/api/DevDiary/";
const DevDiaryApiUrl = "https://dev-diary-webapi.onrender.com";

const DiaryApi = axios.create({
  baseURL: DevDiaryApiUrl,
  timeout: 12000000,
});

export async function GetDiaries() {
  const { data } = await DiaryApi.get(`GetDiaries`, {});
  return data;
}

export async function GetDiariesDates(idGithub) {
  const { data } = await DiaryApi.get(`GetDiariesDates`, {
    params: { idGithub },
  });
  return data;
}

export async function GetDiary(idGithub, diaryDate) {
  const { data } = await DiaryApi.get(`GetDiary`, {
    params: { idGithub, diaryDate },
  });
  return data;
}

export async function CreateDiary(data) {
  const response = await DiaryApi.post(`CreateDiary`, data);
  return response;
}

export async function UpdateDiary(diary) {
  const response = await DiaryApi.put(`UpdateDiary`, diary);
  return response;
}
