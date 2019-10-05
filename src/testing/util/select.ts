import { ShallowWrapper } from "enzyme";

export const componentWithId = (container: ShallowWrapper, id: string) => {
    return container.find(`[data-testid="${id}"]`);
}