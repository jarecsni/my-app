import React from 'react';
import { inject, observer } from 'mobx-react';
import { UiState } from '../stores/UiState';

class SubPageComponent extends React.Component<{ uiState: UiState }> {
    render() {
        const { uiState } = this.props;
        return <div>Time is: {new Date(uiState.time).toString()}</div>;
    }
}

@inject('uiState')
@observer
class SubPage extends SubPageComponent {}

export { SubPageComponent, SubPage };
