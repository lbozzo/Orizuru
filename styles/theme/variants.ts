const variants = {
    brand: {
        fontFamily: 'heading',
        fontSize: 2,
        fontWeight: 'bold',
        color: 'primary'
    },
    link: {
        transition: 'color 250ms ease-in-out'
    },
    nav: {
        mx: 1,
        py: 2,
        px: 3,
        letterSpacing: 1,
        fontFamily: 'heading',
        fontWeight: 'medium',
        fontSize: 1,
        color: 'gray.900',
        transition: 'all 250ms ease-in-out',
        ':hover,:focus,.active': {
            color: 'primary',
            transform: 'translateY(-2px)'
        }
    },
    navButton: {
        mx: 2,
        py: 2,
        px: 3,
        letterSpacing: 1,
        fontFamily: 'heading',
        fontWeight: 'medium',
        fontSize: 1,
        color: 'white',
        bg: 'primary',
        borderRadius: 4,
        boxShadow: '0px 0px 7px rgba(240,140,0,0.3)',
        transition: 'all 250ms ease-in-out',
        ':hover,:focus,.active': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 0px 12px rgba(240,140,0,0.3)'
        }
    }
};

export default variants;
