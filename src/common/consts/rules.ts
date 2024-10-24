type RulseFields = {
    required: boolean;
    message: string;
};

export const rules: RulseFields = {
    required: true,
    message: 'Это поле обязательноея для заполнени',
};

export const rulesWithValidator = {
    validator(_: unknown, value: string) {
        return new Promise((resolve, reject) => {
            if (value && value.match(/[a-zA-z]/))
                reject('Принимаем только кирилицу');
            return resolve(value);
        });
    },
};
