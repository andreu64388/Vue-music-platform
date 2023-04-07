import axios from "../../axios/axios";

export default {
  state: {
    isAuth: false,
    user: null,
    token: null,
    modal: false,
    loading: false,
    message: null,
  },

  actions: {
    async registerUser({ commit }, formData) {
      try {
        console.log(formData);

        const onUploudsProgress = (progressEvent) => {
          console.log(
            "Upload Progress: " +
              Math.round((progressEvent.loaded * 100) / progressEvent.total) +
              "%"
          );
        };
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },

          onUploadProgress: onUploudsProgress,
        };
        console.log(formData);
        const { data } = await axios.post("/user/register", formData, config);
        if (data.token) {
          window.localStorage.setItem("token", data.token);
        }
        console.log(data);
        commit("updateAuth", { user: data?.user, token: data?.token });
      } catch (error) {}
    },

    async LoginUser({ commit }, { datas }) {
      try {
        const { data } = await axios.post("/user/login", datas);
        if (data.token) {
          window.localStorage.setItem("token", data.token);
        }
        console.log(data);
        commit("updateAuth", { user: data.user, token: data.token });
        return data;
      } catch (err) {
        console.log(err);
      }
    },

    async GetMe({ commit }) {
      try {
        const { data } = await axios.get("/user/getme");
        if (data.token) {
          window.localStorage.setItem("token", data.token);
        }
        console.log(data);
        commit("updateAuth", { user: data.user, token: data.token });

        return data;
      } catch (error) {
        console.log(error);
      }
    },

    async UpdateUser({ commit }, formData) {
      try {
        const onUploudsProgress = (progressEvent) => {
          console.log(
            "Upload Progress: " +
              Math.round((progressEvent.loaded * 100) / progressEvent.total) +
              "%"
          );
        };
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: onUploudsProgress,
        };

        const { data } = await axios.post(
          "/user/upload_user",
          formData,
          config
        );

        if (data.token) {
          window.localStorage.setItem("token", data.token);
        }
        console.log(data);
        commit("updateAuth", { user: data.user, token: data.token });

        return data;
      } catch (error) {
        console.log(error);
      }
    },

    async UpdateUserPassword({ commit }, datas) {
      try {
        const { data } = await axios.post("/user/update/password", {
          user_id: datas.user_id,
          user_password: datas.user_password,
        });
        console.log(data);

        if (data.token) {
          window.localStorage.setItem("token", data.token);
        }
        commit("updateAuth", { user: data.user, token: data.token });
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    updateLoading(state, loading) {
      state.loading = loading;
    },
    updateAuth(state, { user, token }) {
      state.isAuth = true;
      state.user = user;
      state.token = token;
    },
    updateMessage(state, message) {
      state.message = message;
    },
    logout(state) {
      state.isAuth = false;
      state.user = null;
      state.admin = false;
      state.token = null;
      state.modal = false;
      state.loading = false;
      state.message = null;
      window.localStorage.removeItem("token");
    },
    resetModal(state) {
      state.modal = false;
    },
    showModal(state) {
      state.modal = true;
    },
  },
  getters: {
    isAuth(state) {
      return state.isAuth;
    },
    user(state) {
      return state.user;
    },
    token(state) {
      return state.token;
    },
    modal(state) {
      return state.modal;
    },
  },
};
