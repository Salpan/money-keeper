import { categoriesDictionary } from '_consts/categoriesList';
import { TransactionResponse } from '_types/transactions';
import dayjs from 'dayjs';

type DataDictionary = Array<{ groupName: string; list: TransactionResponse[] }>;

export const transactionConverter = (
    transactionList?: TransactionResponse[],
) => {
    const updatedList = transactionList?.reduce<DataDictionary>(
        (acc, transaction) => {
            const trans = {
                ...transaction,
                key: transaction.id,
                categories: categoriesDictionary[transaction.categories]?.name,
            };

            const date = dayjs(trans.date).format('YYYY-MM-DD');

            const foundGroup = acc.find((t) => t.groupName === date);

            if (foundGroup) {
                return acc.map((groupTrans) => {
                    if (groupTrans.groupName === date) {
                        const list = Array.isArray(groupTrans.list)
                            ? [...groupTrans.list, trans]
                            : [trans];

                        return {
                            ...groupTrans,
                            list: typeof list === 'number' ? [] : list,
                        };
                    }
                    return groupTrans;
                });
            } else {
                acc.push({ groupName: date, list: [trans] });
            }

            return acc;
        },
        [],
    );
    const sortedList = updatedList?.sort((a, b) => {
        if (a.groupName < b.groupName) return -1;
        if (a.groupName > b.groupName) return 1;
        return 0;
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return sortedList?.reduce<any>((acc, trans) => {
        return [...acc, trans.groupName, ...(trans?.list ?? [])];
    }, []);
};
