/* eslint-disable prettier/prettier */
import APIClient from '../Config/ApiClient';
import {ApiResponse} from '../interfaces/podcasts.interface';

const findAll = async (count: number) => {
  try {
    const response = await APIClient.get<ApiResponse.RecentNewTrending>(
      `/recent/feeds?max=${count}&lang=es&pretty`,
    );
    return response.data;
  } catch (error) {
    console.log('Error findAll:', error);
  }
};
const findById = async (id: number) => {
  try {
    const response = await APIClient.get<ApiResponse.EpisodesByFeedId>(
      `/episodes/byfeedid?id=${id}`,
    );
    return response.data;
  } catch (error) {
    console.log('error findById: ', error);
  }
};
// const findByTitle = async (title: string) => {
//   const response = await apiClient.get<Tutorial[]>(`/tutorials?title=${title}`);
//   return response.data;
// };
// const create = async ({title, description}: Tutorial) => {
//   const response = await apiClient.post<any>('/tutorials', {
//     title,
//     description,
//   });
//   return response.data;
// };
// const update = async (id: any, {title, description, published}: Tutorial) => {
//   const response = await apiClient.put<any>(`/tutorials/${id}`, {
//     title,
//     description,
//     published,
//   });
//   return response.data;
// };
// const deleteById = async (id: any) => {
//   const response = await apiClient.delete<any>(`/tutorials/${id}`);
//   return response.data;
// };
// const deleteAll = async () => {
//   const response = await apiClient.delete<any>('/tutorials');
//   return response.data;
// };
const PodcatsService = {
  findAll,
  findById,
  //   findByTitle,
  //   create,
  //   update,
  //   deleteById,
  //   deleteAll,
};
export default PodcatsService;
