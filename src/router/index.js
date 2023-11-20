import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "DashboardPage",
    component: () => import('@/views/Dashboard/DashboardPage.vue')
  },
  {
    path: '/Catalog',
    name: 'Catalog',
    component: () => import('@/views/store/CatalogPage.vue')
  },
  {
    path: '/CatalogDetails/:productId',
    name: 'CatalogDetails',
    component: () => import('@/views/store/CatalogDetails.vue')
  },
  {
    path: '/CatalogSku',
    name: 'CatalogSku',
    component: () => import('@/views/store/CatalogSku.vue')
  },
  {
    path: '/Market',
    name: 'Market',
    component: () => import('@/views/store/MarketPage.vue')
  },
  {
    path: '/MarketDetails/:sid',
    name: 'MarketDetails',
    component: () => import('@/views/store/MarketDetails.vue')
  },
  {
    path: '/StockSummary',
    name: 'StockSummary',
    component: () => import('@/views/store/StockSummary.vue')
  },
  {
    path: '/StockHistory/:listId/:colorId/:sizeId',
    name: 'StockHistory',
    component: () => import('@/components/CatalogVersion/StockHistory.vue')
  },
  {
    path: '/SupplierPage',
    name: 'SupplierPage',
    component: () => import('@/views/supplier/SupplierPage.vue')
  },
  {
    path: '/SupplierEdit/:sid',
    name: 'SupplierEdit',
    component: () => import('@/views/supplier/SupplierEdit.vue')
  },
  {
    path: '/ProfilePage',
    name: 'ProfilePage',
    component: () => import('@/views/profile/ProfilePage.vue')
  },
  {
    path: '/PoPage',
    name: 'PoPage',
    component: () => import('@/views/purchaseOrder/PoPage.vue')
  },
  {
    path: '/ProductionPage',
    name: 'ProductionPage',
    component: () => import('@/views/purchaseOrder/ProductionPage.vue')
  },
  {
    path: '/DispatchedPage',
    name: 'DispatchedPage',
    component: () => import('@/views/purchaseOrder/DispatchedPage.vue')
  },
  {
    path: '/CompletedPage',
    name: 'CompletedPage',
    component: () => import('@/views/purchaseOrder/CompletedPage.vue')
  },
  {
    path: "/CompleteDetail/:purchaseId",
    name: "CompleteDetail",
    component: () => import('@/views/purchaseOrder/CompleteDetail.vue')
  },
  {
    path: '/ProductionPage',
    name: 'ProductionPage',
    component: () => import('@/views/purchaseOrder/ProductionPage.vue')
  },
  {
    path: '/PoDetail/:posid',
    name: 'PoDetail',
    component: () => import('@/views/purchaseOrder/PoDetail.vue')
  },
  {
    path: "/PoEdit/:sid/edit",
    name: "PoEdit",
    component: () => import('@/views/purchaseOrder/PoEdit.vue')
  },
  {
    path: "/PurchasePage",
    name: "PurchasePage",
    component: () => import('@/views/purchase/PurchasePage.vue')
  },
  {
    path: "/PurchaseDetail/:sid",
    name: "PurchaseDetail",
    component: () => import('@/views/purchase/PurchaseDetail.vue')
  },
  {
    path: "/SalesOrder",
    name: "SalesOrder",
    component: () => import('@/views/sales/SalesOrder.vue')
  },
  {
    path: "/ProcessingPage",
    name: "ProcessingPage",
    component: () => import('@/views/sales/ProcessingPage.vue')
  },
  {
    path: "/DispatchPage",
    name: "DispatchPage",
    component: () => import('@/views/sales/DispatchPage.vue')
  },
  {
    path: "/InTransit",
    name: "InTransit",
    component: () => import('@/views/sales/InTransit.vue')
  },
  {
    path: "/SupplierForm",
    name: "SupplierForm",
    component: () => import('@/views/manage/SupplierForm.vue')
  },
  {
    path: "/CustomerPage",
    name: "CustomerPage",
    component: () => import('@/views/manage/CustomerPage.vue')
  },
  {
    path: "/DeliveryForm",
    name: "DeliveryForm",
    component: () => import('@/views/manage/DeliveryForm.vue')
  },
  {
    path: "/FabricatorForm",
    name: "FabricatorForm",
    component: () => import('@/views/manage/FabricatorForm.vue')
  },
  {
    path: "/MembersPage",
    name: "MembersPage",
    component: () => import('@/views/manage/MembersPage.vue')
  },
  {
    path: "/OrderForm",
    name: "OrderForm",
    component: () => import('@/views/manage/OrderForm.vue')
  },
  {
    path: "/PaymentForm",
    name: "PaymentForm",
    component: () => import('@/views/manage/PaymentForm.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
