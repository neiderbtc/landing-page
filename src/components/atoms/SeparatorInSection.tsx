import React, {FC} from 'react';
type Props = {
    gradient?: boolean
}
const SeparatorInSection: FC<Props> = ({gradient}) => {
    return (
        <div className="w-full mb-4">
            <div className={`h-1 mx-auto ${gradient ? 'gradient' : 'bg-white' }  w-1/6 opacity-25 my-0 py-0 rounded-t`}></div>
        </div>
    );
};

export default SeparatorInSection;