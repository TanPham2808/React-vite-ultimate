// import axios from "axios";
import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phoneNumber) => {
    const URL_BACKEND = "api/v1/user"
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phoneNumber
    }

    return axios.post(URL_BACKEND, data);
}

const updateUserAPI = (id, fullName, phoneNumber) => {
    const URL_BACKEND = "api/v1/user"
    const data = {
        _id: id,
        fullName: fullName,
        phone: phoneNumber
    }

    return axios.put(URL_BACKEND, data);
}

const deleteUserAPI = () => {

}

const fetchUserAPI = () => {
    const URL_BACKEND = "api/v1/user"
    return axios.get(URL_BACKEND);
}

const handeUploadFile = (file, folder) => {
    const URL_BACKEND = `/api/v1/file/upload`;
    let config = {
        headers: {
            "upload-type": folder,
            "Content-Type": "multipart/form-data"
        }
    }

    const bodyFormData = new FormData();
    bodyFormData.append("fileImg", file)

    return axios.post(URL_BACKEND, bodyFormData, config)
}

const updateUserAvatarAPI = (id, fullName, phoneNumber, avatar) => {
    const URL_BACKEND = "api/v1/user"
    const data = {
        _id: id,
        fullName: fullName,
        phone: phoneNumber,
        avatar: avatar
    }

    return axios.put(URL_BACKEND, data);
}

export {
    createUserAPI, updateUserAPI, deleteUserAPI, fetchUserAPI,
    handeUploadFile, updateUserAvatarAPI
}