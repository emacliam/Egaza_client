<template>
  <div
    class="fixed bottom-0 right-0 flex flex-col items-end ml-1 w-0 border text-sm"
    style="width:0"
  >
    <div
      class="chat-modal mr-5 flex flex-col mb-5 shadow-lg w-64 border p-1 bg-white rounded-lg"
    >
      <!-- close button -->
      <div
        class="close-chat  rotate-icon  text-black mb-1 w-10 flex justify-center items-center px-2 py-1 rounded self-end cursor-pointer"
      >
        <svg
          viewBox="0 0 16 16"
          class="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
          />
          <path
            fill-rule="evenodd"
            d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
          />
        </svg>
      </div>

      <div class="flex justify-between items-center mr-5 w-full">
        <div class="flex items-center">
          Send us a message
        </div>
      </div>
      <!-- chats -->
      <div
        class="flex flex-col bg-white px-2 chat-services overflow-hidden border-gray-300 border rounded"
      >
        <textarea
          name=""
          id=""
          cols="30"
          rows="2"
          placeholder="Give feed back or ask for help"
          class="text-gray-700 focus:outline-none"
        ></textarea>
        <label class="cursor-pointer my-2">
          <span class="leading-normal px-1 py-1 text-blue-700 text-xs"
            >Add Image</span
          >
          <input
            type="file"
            class="hidden"
            :accept="accept"
          /><!-- :multiple="multiple -->
        </label>
      </div>
      <!-- send message -->
      <div class="relative bg-white">
        <button
          class="right-0 bottom-0 text-white bg-blue-700 rounded   hover:text-blue-500 m-1 px-3 py-1 w-auto transistion-color duration-100 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
    <div
      class="show-chat mx-2 mb-1 mt-4 p-4 text-gray-700 hover:text-gray-500 flex justify-center items-center cursor-pointer "
    >
      <img class="w-16 h-16 ml-12 " :src="`${publicPath}Icons/info.svg`" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  mounted() {
    const chatModal = document.querySelector('.chat-modal');
    const chatServices = document.querySelector('.chat-services');

    const showChat = document.querySelector('.show-chat');
    const closeChat = document.querySelector('.close-chat');

    showChat.addEventListener('click', function() {
      chatModal.classList.add('show');
      showChat.classList.add('hidden');
      setTimeout(() => {
        chatServices.classList.add('expand');
      }, 500);
    });
    closeChat.addEventListener('click', function() {
      setTimeout(() => {
        showChat.classList.remove('hidden');
      }, 820);
      chatServices.classList.remove('expand');
      setTimeout(() => {
        chatModal.classList.remove('show');
      }, 500);
    });
  },
};
</script>

<style scoped>
.chat-services {
  transition: 0.5s;
  max-height: 0;
}
.chat-services.expand {
  max-height: 350px;
}
.message {
  max-width: 250px;
}

.chat-modal {
  transition: 0.5s;
  opacity: 0;
  transform: translateX(500px);
}

.chat-modal.show {
  opacity: 1;
  transform: translateX(0);
}

@keyframes animateModal {
  from {
    transform: translateX(200px) opacity(0);
  }
  to {
    transform: translateX(0) opacity(1);
  }
}
.rotate-icon:hover {
  animation: spin 3s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
textarea::placeholder {
  color: gray;
  font-size: 1em;
}
</style>
