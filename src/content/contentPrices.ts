const items = [
    {
        text: 'item 1 ',
    },
    {
        text: 'item 2 ',
    },
    {
        text: 'item 3 ',
    },
    {
        text: 'item 4 ',
    }
];  

export const contentPrices: {
    title: string;
    characteristic: {text: string}[];
    price: {
        description: string;
        amount: string
    }
    big?: boolean;
}[] = [
    {
        title: 'Free',
        price: {
            description: 'per user', 
            amount: '0'
        },
        characteristic: items
    },
    {
        title: 'Basic',
        price: {
            description: 'per user', 
            amount: '0.7'
        },
        big: true,
        characteristic: items
    },
    {
        title: 'Pro',
        price: {
            description: 'per user', 
            amount: '0.99'
        },
        characteristic: items
    }
]