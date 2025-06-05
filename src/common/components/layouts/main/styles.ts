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
    startPage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    budgetConteiner: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    budgetBalance: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%',
        marginBottom: '20px',
        borderRadius: '10px',
    },
    budgetMain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: '150px',
        borderRadius: '10px',
    },
    numberText: {
        fontSize: '20px',
    },
    transactionAmount: {
        paddingLeft: '35px',
    },
    chartsBtnContainer: {
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
    },
    chartsButton: {
        // width: '100px',
        // height: '20px',
    },
    budgetPieChart: {
        width: '600px',
        height: '100%',
    },
}));
