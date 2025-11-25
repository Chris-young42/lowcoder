import { useMaterailDrop } from "../../../hooks/useMaterialDrop";
import type { CommonComponentProps } from "../../../interface";


function Page({ id, name, children, styles }: CommonComponentProps) {

    const {canDrop, drop } = useMaterailDrop(['Button', 'Container', 'Modal', 'Table', 'Form'], id);

    return (
        <div
            data-component-id={id}
            ref={drop as unknown as React.Ref<HTMLDivElement>}
            className='p-[20px] h-[100%] box-border'
            style={{ ...styles, border: canDrop ? '2px solid blue' : 'none' }}
        >
            {children}
        </div>
    )
}

export default Page;