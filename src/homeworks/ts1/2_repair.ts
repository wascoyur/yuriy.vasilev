/**
 * Здесь код с ошибками типов. Нужно их устранить
 * */

// Мы это не проходили, но по тексту ошибки можно понять, как это починить
export const getFakeApi = async (): Promise<string> => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
  console.log(result);
  return result;
};

// Мы это не проходили, но по тексту ошибки можно понять, как это починить
export class SomeClass {
  private set: Set<number>;
  private channel: BroadcastChannel;
  constructor() {
    this.set = new Set([1]);
    this.channel = new BroadcastChannel('test-broadcast-channel');
  }
}

export type Data = {
  type: 'Money' | 'Percent';
  value: DataValue;
};

export type DataValue = Money | Percent;

export type Money = {
  currency: string;
  amount: number;
};

export type Percent = {
  percent: number;
};

// Здесь, возможно, нужно использовать as, возможно в switch передавать немного по-другому
const getDataAmount = (data: Data): number => {
  switch (data.type) {
    case 'Money':
      return (data.value as Money).amount;

    default: {
      const unhandled: DataValue = data.value; // здесь, возможно, нужно использовать нечто другое
      throw new Error(`unknown type: ${data.type}`);
    }
  }
};
