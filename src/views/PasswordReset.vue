<template>
  <main>
    <div class="text-blue-400 flex p-2 cursor-pointer" @click="BACK">
      <img class="w-6 h-6 " :src="`${publicPath}Icons/chevronLeft.svg`" />
      <span>BACK</span>
    </div>
    <div
      class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 "
    >
      <div class="max-w-md w-full space-y-8 cont">
        <!-- forgot password -->
        <div>
          <h2 class="text-center text-xl font-extrabold text-black">
            Forgot Password
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600"></p>
        </div>
        <form
          class="mt-2 space-y-6  rounded"
          action="#"
          method="POST"
          v-if="state === 0"
        >
          <fieldset :disabled="loading">
            <input type="hidden" name="remember" value="true" />
            <div class="mb-8">
              <div class="border border-gray-500 overflow-hidden rounded-md">
                <label for="email-address" class="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  v-model="email"
                  autocomplete="email"
                  required
                  class="appearance-none rounded-none my-1 relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address to get authorization code"
                />
              </div>
              <div class="mb-4">
                <button
                  @click="onSubmitEmail"
                  :class="loading ? 'cursor-wait' : 'cursor-pointer'"
                  class="group relative w-full flex justify-center py-2 my-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span
                    class="absolute left-0 inset-y-0 flex items-center pl-3"
                  >
                    <!-- Heroicon name: lock-closed -->
                  </span>
                  <div
                    v-if="loading"
                    class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 "
                  >
                    <div
                      style="border-top-color:transparent"
                      class="border-solid animate-spin  rounded-full border-blue-400 border-4 h-8 w-8"
                    ></div>
                  </div>
                  Get Authorization code
                </button>
              </div>
              <div class="flex items-center space-x-5 text-sm">
                <span>Not what i wanted?</span>
                <div class="flex items-center space-x-5">
                  <a
                    href="/register"
                    class="font-medium text-indigo-600 hover:text-indigo-500 border-b-2 border-dotted border-gray-500"
                    >Create Account</a
                  >
                  <a
                    href="/login"
                    class="font-medium text-indigo-600 hover:text-indigo-500 border-b-2 border-dotted border-gray-500"
                    >Login to Account</a
                  >
                </div>
              </div>
            </div>
          </fieldset>
        </form>
        <!-- count down -->
        <div v-if="state === 1" class="text-black font-semi-bold">
          <template v-if="countDown > 0">
            <div class="">
              Authorization Code Expires in
              <span class="text-xl text-red-700 font-bold">{{ time }}</span>
            </div>
          </template>
          <template v-else>
            <div>Authorization Code Expired Get another one</div>
          </template>
        </div>
        <!-- editing form password -->
        <form
          class="mt-4 space-y-6 bg-white py-2 px-6 rounded"
          action="#"
          method="POST"
          v-if="state === 1"
        >
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div class="border border-gray-500 overflow-hidden rounded-t-md ">
              <label for="code" class="sr-only">Authorization code</label>
              <input
                id="code"
                name="secretCode"
                type="secretCode"
                v-model="secretCode"
                autocomplete="secretCode"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter code received by email"
              />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <div class="flex border border-gray-500">
                <input
                  id="password"
                  name="password"
                  :type="passwordType"
                  v-model="password"
                  autocomplete="new-password"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter 'New' Password"
                />
                <span
                  @click="togglePasswordType()"
                  class="p-2 text-xs font-bold cursor-pointer"
                >
                  <span
                    class="text-blue-600"
                    v-show="passwordType === 'password'"
                    >Show</span
                  ><span class="text-red-600" v-show="passwordType === 'text'"
                    >Hide</span
                  ></span
                >
              </div>
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <div
                class="flex rounded-b-md border border-gray-500 overflow-hidden"
              >
                <input
                  id="password"
                  name="password"
                  :type="passwordType2"
                  v-model="password2"
                  autocomplete="new-password"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Repeat 'New' Password"
                />
                <span
                  class="p-2 text-xs font-bold cursor-pointer"
                  @click="togglePasswordType2()"
                >
                  <span
                    class="text-blue-600"
                    v-show="passwordType2 === 'password'"
                    >Show</span
                  ><span class="text-red-600" v-show="passwordType2 === 'text'"
                    >Hide</span
                  >
                </span>
              </div>
            </div>
            <span class="text-xs">
              <span class="text-red-600">Note</span>
              Your password must be 6+ characters long, contain letters, numbers
              and special characters.
            </span>
          </div>
          <div>
            <button
              @click="onSubmitNewPw"
              :class="loading ? 'cursor-wait' : 'cursor-pointer'"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              <div
                v-if="loading"
                class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 "
              >
                <div
                  style="border-top-color:transparent"
                  class="border-solid animate-spin  rounded-full border-blue-400 border-4 h-8 w-8"
                ></div>
              </div>
              Set
            </button>
            <div v-if="success">
              {{ success }}
            </div>
          </div>
        </form>
        <div class="mt-2 text-sm w-full flex flex-col" v-if="errors">
          <span class="flex space-x-2" v-for="error in errors" :key="error.msg"
            ><p class="text-black text-lg">&#8226;</p>
            <span class="text-black">
              {{ error.msg }}
            </span>
          </span>
        </div>
        <div v-if="success" class="text-sm mt-2 w-full">
          {{ success }}
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from '@/axios';
export default {
  name: 'PasswordReset',
  methods: {
    async BACK() {
      this.$router.go(-1);
    },
    async onSubmitEmail(e) {
      this.loading = true;
      e.preventDefault();
      this.showOverlay = true;
      this.errors = [];

      const res = await axios.post('/api/auth/password-reset/get-code', {
        email: this.email,
      });
      this.showOverlay = false;

      if (!res.data.success) {
        this.errors = res.data.errors;
        this.loading = false;
      } else {
        this.state = 1;
        this.countDownTimer();
        this.loading = false;
        this.$toasted
          .info(
            ` <div class="flex items-center bg-green-500 border-l-4 border-green-700 shadow-md p-2 w-full h-12">

    <div class="text-green-500 rounded-full bg-white mr-3">
      <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
      </svg>
    </div>

    <div class="text-white max-w-xs ">
      Authorization Code send, Open your email
    </div>
  </div>`,
            {
              action: [
                {
                  text: 'GO TO EMAIL',
                  onClick: (e) => {
                    window.open(`http://${this.email}`, '_blank');
                    e.preventDefault();
                  },
                },
                {
                  text: 'Cancel',
                  onClick: (e, toastObject) => {
                    toastObject.goAway(0);
                  },
                },
              ],
            }
          )
          .goAway(4000);
      }
    },
    async onSubmitNewPw(e) {
      e.preventDefault();
      this.errors = [];
      this.showOverlay = true;

      const res = await axios.post('/api/auth/password-reset/verify', {
        email: this.email,
        password: this.password,
        password2: this.password2,
        code: this.secretCode,
      });

      this.showOverlay = false;

      if (!res.data.success) {
        this.errors = res.data.errors;
      } else {
        this.success =
          'Your password has been updated successfully. You are being redirected to login in a few seconds...';

        setTimeout(() => {
          this.$router.push({ path: '/login' });
        }, 3500);
      }
    },
    togglePasswordType() {
      this.passwordType === 'text'
        ? (this.passwordType = 'password')
        : (this.passwordType = 'text');
    },
    togglePasswordType2() {
      this.passwordType2 === 'text'
        ? (this.passwordType2 = 'password')
        : (this.passwordType2 = 'text');
    },
    countDownTimer() {
      if (this.countDown > -3) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.state = 0;
        this.$toasted.info(
          ` <div class="flex items-center bg-green-500 border-l-4 border-green-700 shadow-md p-2 w-full h-12">

    <div class="text-red-500 rounded-full  mr-3">
      <svg data-name="Layer 1" class="animate-bounce text-white h-12 w-12" viewBox="0 0 32 32" fill="currentColor" >
      <path d="M15.28418,15.01367l-1.6189,2.182a1.99985,1.99985,0,0,0-2.3479.66467,1.97759,1.97759,0,0,0-.243.456l-2.40149.02936a.5.5,0,0,0,.00586,1h.00635l2.26514-.02765a1.99855,1.99855,0,1,0,3.52173-1.53192l1.615-2.17676a.49981.49981,0,1,0-.80273-.5957Zm-1.55078,4.625a.99881.99881,0,1,1,.18359-.74219A.99052.99052,0,0,1,13.7334,19.63867ZM25.76221,4.85547a.49973.49973,0,0,0-.63672.30664,1.116,1.116,0,0,1-1.03369.66113c-.17334.01953-.3501.02441-.52734.03027A4.543,4.543,0,0,0,22.46,5.98145a2.56705,2.56705,0,0,0-1.06628.5979L19.84229,5.4375a1.49878,1.49878,0,0,0-2.09668.31836l-.46484.63086a.51256.51256,0,0,1-.56738.1709A12.99807,12.99807,0,1,0,12.93066,32.002a13.21663,13.21663,0,0,0,1.73828-.11523A12.99385,12.99385,0,0,0,23.729,11.72266a.50975.50975,0,0,1-.00537-.59277L24.188,10.498a1.49945,1.49945,0,0,0-.31885-2.09668L22.22491,7.19116a1.519,1.519,0,0,1,.49823-.24487,3.79864,3.79864,0,0,1,.874-.09375c.20313-.00586.40576-.01367.59717-.03418a2.06921,2.06921,0,0,0,1.87549-1.32617A.50008.50008,0,0,0,25.76221,4.85547ZM23.27637,9.20605a.50032.50032,0,0,1,.106.69922l-.46436.63086v.001a1.51712,1.51712,0,0,0-.01758,1.74512A11.99721,11.99721,0,0,1,5.47412,28.376,12.18934,12.18934,0,0,1,3.04,12.251,11.96634,11.96634,0,0,1,16.42383,7.51465a1.51562,1.51562,0,0,0,1.66211-.53516l.46484-.63086a.5015.5015,0,0,1,.69873-.10645l1.89874,1.39752.00165.00189.00171.00061Zm1.53076-5.07227a.49117.49117,0,0,0,.084.00684.501.501,0,0,0,.49268-.416l.522-3.07617a.50026.50026,0,0,0-.98633-.168l-.522,3.07617A.5011.5011,0,0,0,24.80713,4.13379Zm2.56543.69336a.49745.49745,0,0,0,.40527-.207l1.855-2.56152a.49968.49968,0,1,0-.80957-.58594l-1.855,2.56152a.49938.49938,0,0,0,.4043.793Zm-8.51562,6.166a9.909,9.909,0,0,0-7.3075-1.845.471.471,0,0,0-.05579-.00262c-.01172.00183-.02057.00916-.032.01172-.01245.00189-.0249.002-.03735.00391a9.93123,9.93123,0,0,0-6.45691,3.845c-.0094.01074-.02228.01636-.03088.02808-.00513.007-.0058.01556-.01056.02277-.01562.02087-.03357.03925-.049.06024a9.99415,9.99415,0,0,0,2.11206,13.97c.00592.00476.00873.01178.01489.01636l.01294.00421a9.91807,9.91807,0,0,0,5.8938,1.94012,10.13631,10.13631,0,0,0,1.52148-.11523l.02478-.005c.01636-.00092.03271-.00128.04944-.00378.01379-.00214.02429-.01068.0376-.01385a9.934,9.934,0,0,0,6.43848-3.93634c.0202-.02747.03589-.05682.05579-.08441l.00525-.00446.00543-.01172a9.9661,9.9661,0,0,0,1.75421-7.36536c-.00092-.011.00323-.02106.00159-.0321a.49474.49474,0,0,0-.01837-.05115A9.961,9.961,0,0,0,18.85693,10.99316Zm1.59277,7.33691a.49721.49721,0,0,0,.0752-.00586l1.34149-.20215a8.94979,8.94979,0,0,1-1.35614,5.75311l-1.145-.83807a.49993.49993,0,0,0-.59082.80664l1.15228.84344a8.91307,8.91307,0,0,1-5.083,3.14349l-.22943-1.48694a.5.5,0,1,0-.98828.15234l.2301,1.49152a8.9219,8.9219,0,0,1-5.84143-1.416l.9082-1.23566a.49983.49983,0,1,0-.80566-.5918l-.90778,1.235a8.91621,8.91621,0,0,1-3.09387-5.16284l1.58026-.24213a.4999.4999,0,1,0-.15137-.98828l-1.57208.24091a8.91,8.91,0,0,1,1.49127-5.78613l1.2312.90265a.49993.49993,0,1,0,.59082-.80664l-1.22107-.8952a8.9107,8.9107,0,0,1,5.09094-3.00714L11.376,11.666a.50008.50008,0,0,0,.49365.42383.51146.51146,0,0,0,.07666-.00586.49968.49968,0,0,0,.418-.57031l-.2168-1.40778c.2677-.02362.53619-.061.80225-.061A8.90482,8.90482,0,0,1,17.84,11.53436l-.83221,1.12872a.49991.49991,0,0,0,.10547.69922.49444.49444,0,0,0,.29639.09766.49977.49977,0,0,0,.40283-.20312l.84106-1.14069a8.95048,8.95048,0,0,1,3.05609,5.01874l-1.33417.201a.49986.49986,0,0,0,.07422.99414ZM30.49121,6l-3,.05273a.5.5,0,0,0,.00879,1h.00879l3-.05273A.50011.50011,0,0,0,31,6.49121.51745.51745,0,0,0,30.49121,6Z"/>
      </svg>
    </div>

    <div class="text-white max-w-xs ">
      Authorization Code Expired Get a New one
    </div>
  </div>`,
          {
            action: [
              {
                text: 'Cancel',
                onClick: (e, toastObject) => {
                  toastObject.goAway(0);
                },
              },
            ],
          }
        );
      }
    },
  },
  computed: {
    time() {
      var m = Math.floor((this.countDown % 3600) / 60);
      var s = Math.floor((this.countDown % 3600) % 60);
      var mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
      var sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
      return mDisplay + sDisplay;
    },
  },
  data() {
    return {
      email: '',
      password: '',
      password2: '',
      passwordType: 'password',
      passwordType2: 'password',
      secretCode: '',
      state: 0,
      errors: [],
      success: '',
      showOverlay: false,
      loading: false,
      countDown: 600,
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style scoped>
.cont {
  /* Components Root Element ID */
  position: relative;
}
.loader {
  /* Loader Div Class */
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-image: url('../assets/Loaders/spin2.gif');
  background-size: 50px;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10000000;
  opacity: 0.4;
  filter: alpha(opacity=40);
}
</style>
