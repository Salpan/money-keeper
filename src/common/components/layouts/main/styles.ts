import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        margin: 8,
        padding: 8,

        display: 'flex',
        flexGrow: 1,
    },
    content: {
        background: '#ffffff',
        margin: '0px 8px',
        padding: 8,
        borderRadius: 8,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexGrow: 1,
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 32,
        color: token.colorTextDescription,
    },
    noContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#ffffff',
        marginBottom: '20px',
        borderRadius: '10px',
    },
    text: {},
}));
