import { uncheckedItemIdsState } from '../recoil/atoms';
import { useRecoilState } from 'recoil';

const useCheckedItemIds = () => {
  const [uncheckedItemIds, setRecoilCheckedItemIds] = useRecoilState(uncheckedItemIdsState);

  const getIsChecked = (id: number) => {
    return !uncheckedItemIds.includes(id);
  };

  const checkId = (...ids: number[]) => {
    const nextCheckedItemIds = ids.reduce(
      (arr, cur) => {
        const indexInUncheckedIds = arr.indexOf(cur);
        if (indexInUncheckedIds === -1) return arr;
        arr.splice(indexInUncheckedIds, 1);
        return arr;
      },
      [...uncheckedItemIds],
    );

    setRecoilCheckedItemIds(nextCheckedItemIds);
  };

  const uncheckId = (...ids: number[]) => {
    const nextUncheckedIds = ids.reduce(
      (arr, cur) => {
        if (uncheckedItemIds.includes(cur)) return arr;
        arr.push(cur);
        return arr;
      },
      [...uncheckedItemIds],
    );
    setRecoilCheckedItemIds(nextUncheckedIds);
  };

  return { getIsChecked, checkId, uncheckId };
};

export default useCheckedItemIds;
