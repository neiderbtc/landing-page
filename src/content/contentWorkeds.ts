export const contentWorkeds: {
    category: string; 
    title: string; 
    description: string
    action: {
        to: string;
        text: string;
    }
    }[] = [
    {
        category: 'Programming',
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.',
        action: {
            to: '/programming',
            text: 'view'
        }
    },
    {
        category: 'Marketplace',
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.',
        action: {
            to: '/markplace',
            text: 'view'
        }
    },
    {
        category: 'Digital marketing',
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.',
        action: {
            to: '/digital-marketing',
            text: 'view'
        }
    }
]