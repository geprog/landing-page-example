<template>
  <NuxtLayout>
    <Hero />
    <section class="flex flex-col gap-4">
      <h2 class="text-3xl font-bold text-center">Our Planets</h2>
      <Feature
        v-for="feature in features"
        :key="feature.id"
        :title="feature.title"
        :text="feature.text"
        :imagePath="feature.imagePath"
        :imgAlt="feature.imgAlt"
        :reverse="feature.id % 2 === 0"
      />
    </section>
    <section class="flex flex-col gap-4">
      <h2 class="text-3xl font-bold text-center">Pricing</h2>
      <div class="flex flex-wrap gap-4 justify-center">
        <Pricing
          v-for="pricingOption in pricingOptions"
          :key="pricingOption.id"
          :title="pricingOption.name"
          :cost="pricingOption.price"
          :text="pricingOption.description"
        />
      </div>
    </section>
    <section class="flex flex-col gap-4">
      <h2 class="text-3xl font-bold text-center">
        Testimonials from our trusted customers
      </h2>
      <div class="flex flex-wrap gap-2 justify-center">
        <Testimonial
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          :author="testimonial.author"
          :text="testimonial.text"
          :imagePath="testimonial.imagePath"
          :imgAlt="testimonial.imgAlt"
        />
      </div>
    </section>
    <section class="flex flex-col gap-4">
      <h2 class="text-3xl font-bold text-center">FAQ</h2>
      <div class="flex flex-col bg-primary rounded-lg">
        <Faq
          v-for="faq in faqs"
          :key="faq.id"
          :title="faq.title"
          :text="faq.text"
        />
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const features = [
  {
    id: 0,
    title: 'Uranus',
    text: 'Discover the unique beauty of Uranus, the seventh planet from the sun. With its distinct icy blue appearance and sideways rotation, Uranus offers a mesmerizing celestial experience.',
    imagePath: 'simon-lee-A6OTC1-Ok-A-unsplash.jpg',
    imgAlt: 'Uranus',
  },
  {
    id: 1,
    title: 'Earth',
    text: 'Experience the wonders of our home planet, Earth. From breathtaking landscapes to diverse ecosystems, Earth is a haven for life. Own a piece of the blue planet and connect with the essence of life itself.',
    imagePath: 'simon-lee-eGALMCJ_Cvk-unsplash.jpg',
    imgAlt: 'Earth',
  },
  {
    id: 2,
    title: 'Mars',
    text: 'Embark on a journey to the Red Planet, Mars. Uncover the mysteries of its rust-colored surface and the possibility of past life. Bring the allure of Mars into your space and ignite your sense of exploration.',
    imagePath: 'simon-lee-hrOXaenH640-unsplash.jpg',
    imgAlt: 'Mars',
  },
  {
    id: 3,
    title: 'Moon',
    text: "Capture the magic of the Moon, Earth's loyal companion. Own a piece of the moon and bask in the soft glow that has inspired poets, dreamers, and lovers throughout history. The Moon, a timeless symbol of beauty and mystery.",
    imagePath: 'simon-lee-m0p-ALuA1ok-unsplash.jpg',
    imgAlt: 'Moon',
  },
  {
    id: 4,
    title: 'Neptune',
    text: 'Immerse yourself in the enchanting blue hues of Neptune, the eighth and farthest known planet from the sun. Own a piece of Neptune and add a touch of the outer reaches of our solar system to your collection.',
    imagePath: 'simon-lee-MzZ4WW3IT_U-unsplash.jpg',
    imgAlt: 'Neptune',
  },
  {
    id: 5,
    title: 'Venus',
    text: 'Experience the brilliance of Venus, the second planet from the sun. Known as the "Evening Star" or "Morning Star," Venus captivates with its radiant beauty. Bring the splendor of Venus into your personal cosmic display.',
    imagePath: 'simon-lee-O3oIMSvv6O8-unsplash.jpg',
    imgAlt: 'Venus',
  },
  {
    id: 6,
    title: 'Saturn',
    text: "Behold the majestic rings of Saturn, the sixth planet from the sun. Saturn's stunning ring system sets it apart in the night sky. Own a piece of Saturn and marvel at the celestial beauty that has fascinated astronomers for centuries.",
    imagePath: 'simon-lee-z1vpjHAq1o8-unsplash.jpg',
    imgAlt: 'Saturn',
  },
];

const pricingOptions = [
  {
    id: 0,
    name: "Explorer's Delight",
    price: '99.99',
    description:
      'Explore the wonders of the solar system with our Starter Package. Perfect for beginners!',
  },
  {
    id: 1,
    name: 'Celestial Harmony',
    price: '249.99',
    description:
      'Immerse yourself in the beauty of the solar system with our Premium Package. Experience a more comprehensive collection!',
  },
  {
    id: 2,
    name: 'Galactic Masterpiece',
    price: '499.99',
    description:
      'Elevate your space with our Ultimate Collection, a true Galactic Masterpiece. Ideal for collectors and enthusiasts!',
  },
];

const testimonials = [
  {
    id: 0,
    author: 'Alice Johnson',
    text: "Owning a piece of the solar system has been a dream come true. The beauty and uniqueness of each planet add a touch of wonder to my space. It's like having a piece of the universe in my own home.",
    imagePath: 'simon-lee-_B7LjqNXu5Q-unsplash.jpg',
    imgAlt: 'Alice Johnson',
  },
  {
    id: 1,
    author: 'David Rodriguez',
    text: "I never thought I could feel so connected to the cosmos until I got my own piece of Mars. It's more than just a decorative item; it's a daily reminder of the vastness and mysteries beyond our world.",
    imagePath: 'simon-lee-hrOXaenH640-unsplash.jpg',
    imgAlt: 'David Rodriguez',
  },
  {
    id: 2,
    author: 'Emily White',
    text: 'The Moon piece I purchased is simply enchanting. Its soft glow and the symbolism it carries make it a conversation starter. It adds a touch of magic to my living space that I cherish every day.',
    imagePath: 'simon-lee-A6OTC1-Ok-A-unsplash.jpg',
    imgAlt: 'Emily White',
  },
  {
    id: 3,
    author: 'Michael Turner',
    text: "Neptune's vibrant blue colors bring a sense of tranquility to my home. It's a unique and elegant addition to my collection. I'm constantly captivated by its beauty and the stories it holds.",
    imagePath: 'simon-lee-MzZ4WW3IT_U-unsplash.jpg',
    imgAlt: 'Michael Turner',
  },
];

const faqs = [
  {
    id: 0,
    title: 'What is included in the solar system package?',
    text: 'Our solar system package includes unique pieces representing planets such as Earth, Mars, Moon, Neptune, Venus, Saturn, and Uranus. Each piece is carefully crafted to capture the essence and beauty of the celestial bodies.',
  },
  {
    id: 1,
    title: 'How are the solar system pieces made?',
    text: 'Our solar system pieces are crafted using high-quality materials to ensure durability and accuracy in representation. Skilled artisans meticulously design and manufacture each piece, paying attention to detail to provide you with an authentic cosmic experience.',
  },
  {
    id: 2,
    title: 'Can I customize my solar system package?',
    text: 'At this time, we offer pre-designed packages featuring the most iconic planets in our solar system. However, we are continuously working on expanding our offerings. Stay tuned for updates on customizable options to suit your preferences.',
  },
  {
    id: 3,
    title: 'How do I care for my solar system pieces?',
    text: 'To maintain the vibrancy of your solar system pieces, we recommend gentle cleaning with a soft, dry cloth. Avoid exposure to direct sunlight for extended periods to prevent color fading. For specific care instructions, refer to the product care guide included in your package.',
  },
  {
    id: 4,
    title:
      'What materials are used in the construction of the solar system pieces?',
    text: 'Our solar system pieces are crafted using a combination of high-quality materials, including resin, metal, and other premium elements. These materials are chosen to ensure durability, accuracy, and a visually appealing representation of the celestial bodies.',
  },
  {
    id: 5,
    title: 'Is assembly required for the solar system pieces?',
    text: 'No assembly is required for our solar system pieces. Each item is shipped fully assembled and ready to be displayed in your space. Simply unpack and place the pieces in your desired arrangement to create a stunning cosmic showcase.',
  },
];
</script>
