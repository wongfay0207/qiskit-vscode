// Copyright 2018 IBM RESEARCH. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// =============================================================================

'use strict';

import { SuggestionSymbol } from '../../types';

export class SuggestionsDictionary {
    allSymbols(): SuggestionSymbol[] {
        return this.getSymbols();
    }

    symbolsWithTypeIn(types: string[]): SuggestionSymbol[] {
        let isContainedInTypes = (symbol: SuggestionSymbol) => types.indexOf(symbol.type) > -1;

        return this.getSymbols().filter(isContainedInTypes);
    }

    methodsIn(names: string[]): SuggestionSymbol[] {
        return this.symbolsWithTypeIn(['method']).filter(symbol => names.includes(symbol.label));
    }

    allMethods(): SuggestionSymbol[] {
        return this.symbolsWithTypeIn(['method']);
    }

    private getSymbols(): SuggestionSymbol[] {
        const qiskitSymbols: QiskitSDK = require('../libs/qiskitSDK.json');
        let symbols: SuggestionSymbol[] = [];
        qiskitSymbols.classes.forEach(qclass => {
            symbols.push({
                label: qclass.name,
                detail: qclass.detail,
                documentation: qclass.documentation,
                type: 'class',
                parent: qclass.name
            });
            symbols.push(...this.getMethods(qclass));
        });

        return symbols;
    }

    private getMethods(qclass: QiskitClass): SuggestionSymbol[] {
        return qclass.methods.map(qmethod => {
            return {
                label: qmethod.name,
                detail: qmethod.detail,
                documentation: qmethod.documentation,
                type: 'method',
                parent: qclass.name
            };
        });
    }
}

interface QiskitSDK {
    classes: QiskitClass[];
}

interface QiskitClass {
    name: string;
    detail: string;
    documentation: string;
    methods: QiskitMethod[];
}

interface QiskitMethod {
    name: string;
    type: string;
    detail: string;
    documentation: string;
    arguments: QiskitArgument[];
}

interface QiskitArgument {
    name: string;
    type: string;
}
