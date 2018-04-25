import Home from '@/components/home'
import Order from '@/components/order'
import RepairOrder from '@/components/repairOrder'
import ProductionLine from '@/components/productionLine'
import Quality from '@/components/quality'
import Report from '@/components/report'
import Production from '@/components/order/production'
import NewOrders from '@/components/order/newOrders'
import HasEnded from '@/components/order/hasEnded'
import OrderDetail from '@/components/order/orderDetail'
import OrderNumber from '@/components/order/orderNumber'
import AreaDetails from '@/components/order/number/areaDetails'
import SpecificationDetails from '@/components/order/number/specificationDetails'
import CompanyDetails from '@/components/order/number/companyDetails'

const menuData=[
  {
    path: '/',
    name: 'home',
    icon:'home1',
    title:'首页',
    component: Home
  },
  {
    path: '/order',
    name: 'order',
    icon:'list2',
    title:'订单',
    component: Order,
    text:'查看订单相关数据',
    color:'#84ed9b',
    children: [
      {
        path: '',
        name: 'production',
        title:'生产中',
        component:Production
      },
      {
        path: 'newOrders',
        name: 'newOrders',
        title:'新订单',
        component:NewOrders
      },
      {
        path: 'hasEnded',
        name: 'hasEnded',
        title:'已结束',
        component:HasEnded
      }
    ]
  },
  {
    path: '/repairOrder',
    name: 'repairOrder',
    icon:'hdd1',
    title:'工单',
    component: RepairOrder,
    text:'查看工单相关数据',
    color:'#c438d1'
  },
  {
    path: '/productionLine',
    name: 'productionLine',
    icon:'graph2',
    title:'产线',
    component: ProductionLine,
    text:'查看产线在制品,工位占压数据',
    color:'#f7a085'
  },
  {
    path: '/quality',
    name: 'quality',
    icon:'framework',
    title:'质量',
    component: Quality,
    text:'查看质量相关数据',
    color:'#e5db39'
  },
  {
    path: '/report',
    name: 'report',
    icon:'graph1',
    title:'报表',
    component: Report,
    text:'查看产量,产线,在制品订单数量',
    color:'#52a8f1'
  },
  {
    path:'/orderDetail/:id',
    name:'orderDetail',
    title:'订单详情',
    component:OrderDetail
  },
  {
    path:'/orderNumber/:id',
    name:'orderNumber',
    title:'订单详情',
    component:OrderNumber,
    children: [
      {
        path: '',
        name: 'areaDetails',
        title:'区域明细',
        component:AreaDetails
      },
      {
        path: 'specificationDetails',
        name: 'specificationDetails',
        title:'规格明细',
        component:SpecificationDetails
      },
      {
        path: 'companyDetails',
        name: 'companyDetails',
        title:'公司明细',
        component:CompanyDetails
      }
    ]
  }
];
export default menuData
