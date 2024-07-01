let xAxisData = [
    {
        "name": 'Jan',
        "Sale": 112_000
    },
    {
        "name": 'Feb',
        "Sale": 99_000
    },
    {
        "name": 'Mar',
        "Sale": 12_090
    },
    {
        "name": 'Apr',
        "Sale": 99_000
    },
    {
        "name": 'May',
        "Sale": 54_000
    },
    {
        "name": 'Jun',
        "Sale": 85_000
    },
    {
        "name": 'Jul',
        "Sale": 34_000
    },
    {
        "name": 'Agu',
        "Sale": 18_598
    },
    {
        "name": 'Sep',
        "Sale": 0
    },
    {
        "name": 'Oct',
        "Sale": 73_078
    },
    {
        "name": 'Nov',
        "Sale": 12_900
    },
    {
        "name": 'Dev',
        "Sale": 97_000
    }
    
]

const newMembers = [
    {
        id:1,
        username: 'mohammad Amin',
        title: 'Web Developer',
        img: './images/man.jpg'
    },
    {
        id:2,
        username: 'Sasan Moq',
        title: 'Seo Eng',
        img: './images/man.jpg'
    },
    {
        id:3,
        username: 'Zahra Aqayi',
        title: 'weblog',
        img: './images/man.jpg'
    },
    {
        id:4,
        username: 'Ali salehi',
        title: 'Hacker',
        img: './images/man.jpg'
    }
    
]

const transactions = [
    {
        id:1,
        customer: 'Amin saeedi',
        data: '12 Jun 2022',
        amount: 123,
        status: 'Approved',
        img: 'images/man.jpg'

    },
    {
        id:2,
        customer: 'Sssan moq',
        data: '23 Jul 2022',
        amount: 123,
        status: 'Declined',
        img: 'images/man.jpg'

    },
    {
        id:3,
        customer: 'mohamad salehi',
        data: '28 May 2022',
        amount: 123,
        status: 'Pending',
        img: 'images/man.jpg'

    },
    {
        id:4,
        customer: 'reza kermani',
        data: '1 Feb 2022',
        amount: 123,
        status: 'Approved',
        img: 'images/man.jpg'

    },
]

const userRows = [
    {
        id:1,
        username: 'Hamidreza mohamadi',
        avatar: 'images/man.jpg',
        status: 'active',
        transaction: '$55.98',
        email: 'hamid@gmail.com'
    },
    {
        id:2,
        username: 'mohamad salehi',
        avatar: 'images/man.jpg',
        status: 'active',
        transaction: '$32.98',
        email: 'mohamad@gmail.com'
    },
    {
        id:3,
        username: 'Sasan moqd',
        avatar: 'images/man.jpg',
        status: 'none-active',
        transaction: '$110',
        email: 'sasan@gmail.com'
    },
    {
        id:4,
        username: 'Zahra Aqayi',
        avatar: 'images/man.jpg',
        status: 'active',
        transaction: '$98',
        email: 'zahra@gmail.com'
    },
    {
        id:5,
        username: 'Amin Saeedi',
        avatar: 'images/man.jpg',
        status: 'active',
        transaction: '$0',
        email: 'Amin@gmail.com'
    }
]

let products = [
    {
        id:1,
        title:'Asus',
        avatar: 'images/asus.jpg',
        price:890
    },
    {
        id:2,
        title:'Acer',
        avatar: 'images/asus.jpg',
        price:890
    },
    {
        id:3,
        title:'Hp',
        avatar: 'images/asus.jpg',
        price:890
    },
    {
        id:4,
        title:'Dell',
        avatar: 'images/asus.jpg',
        price:890
    },
]

const productsData = [
    {
        name:'Jan',
        sales:4000,
    },
    {
        name:'Feb',
        sales:3000,
    },
    {
        name:'Mar',
        sales:5000,
    }
]



export {xAxisData, newMembers, transactions, userRows, products, productsData }