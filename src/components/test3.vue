<template>
    <body>
        <section class="mx-auto max-w-2xl">
            <div class="shadow-2xl relative">
                <!-- large image on slides -->
                <div class="mySlides hidden">
                    <div class="image1 w-full object-cover"></div>
                </div>
                <div class="mySlides hidden">
                    <div class="image2 w-full object-cover"></div>
                </div>
                <div class="mySlides hidden">
                    <div class="image3 w-full object-cover"></div>
                </div>
                <div class="mySlides hidden">
                    <div class="image4 w-full object-cover"></div>
                </div>
                <div class="mySlides hidden">
                    <div class="image5 w-full object-cover"></div>
                </div>

                <!-- butttons -->
                <a
                    class="absolute left-0 inset-y-0 flex items-center -mt-32 px-4 text-white hover:text-gray-800 cursor-pointer text-3xl font-extrabold"
                    onclick="plusSlides(-1)"
                    >❮</a
                >
                <a
                    class="absolute right-0 inset-y-0 flex items-center -mt-32 px-4 text-white hover:text-gray-800 cursor-pointer text-3xl font-extrabold"
                    onclick="plusSlides(1)"
                    >❯</a
                >

                <!-- image description -->
                <div
                    class="text-center text-white font-light tracking-wider bg-gray-800 py-2"
                >
                    <p id="caption"></p>
                </div>

                <!-- smaller images under description -->
                <div class="flex">
                    <div>
                        <img
                            class="image1 description h-24 opacity-50 hover:opacity-100 cursor-pointer"
                            src="#"
                            onclick="currentSlide(1)"
                            alt="Dog's Nose"
                        />
                    </div>
                </div>
            </div>
        </section>
    </body>
</template>

<script>
export default {};
</script>

<style></style>
