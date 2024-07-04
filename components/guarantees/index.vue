<template>
  <div class="container mt-4 mb-[117px] max-md:mb-10">
    <div class="grid md:grid-cols-2 md:gap-[10%]">
      <h3
        class="leading-[70px] text-primary text-[64px] max-md:text-[28px] font-bold"
      >
        Гарантии
      </h3>
      <div>
        <div v-for="(item, index) in datas" :key="index" class="mt-6">
          <p
            class="text-2xl mb-6 max-md:text-[20px] font-semibold text-primary"
          >
            {{ item.title }}
          </p>
          <p
            class="md:text-[20px] leading-[28px] text-primary"
            v-html="item.info"
          ></p>
          
          <ul
            v-if="item.lists && item.lists.length > 0"
            class="list-disc md:text-[20px] leading-[28px] text-primary"
          >
            <li class="ml-8 leading-[28px]" v-for="(listItem, liIndex) in item.lists" :key="liIndex">
              {{ listItem }}
            </li>
          </ul>
          <p
            class="md:text-[20px] leading-[28px] text-primary"
            v-html="item.info2"
          ></p>
          <p
            class="md:text-[20px] leading-[28px] text-primary"
            v-html="item.info3"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const datas = ref([
  {
    title: "Обмен и возврат по желанию покупателя",
    info: "Все товары в магазине «NornLight» имеют гарантию. Она заявляется производителем и имеет определенный срок действия на различные группы товаров. Если ваше изделие вышло из строя в течение гарантийного срока вы можете обратиться к нам и получить бесплатный ремонт. Для этого нужно:",
    lists: [
      "Предоставить чек, накладную или сообщить почту или номер телефона, указанные при оформлении заказа.",
      "Привезти товар к нам на склад или отправить его транспортной компанией.",
      "После товар отправляется на экспертизу и ремонт. Если ремонт невозможен, мы обменяем изделие на аналогичное либо вернем деньги за покупку."
    ],
    info2: "Обращаем внимание, что «А-Свет» не является сервисным центром, а выполняет роль посредника между клиентом и поставщиком.",
    info3: "Поэтому сроки проведения ремонта могут отличаться для товаров различных брендов." 
  }
]);
</script>
