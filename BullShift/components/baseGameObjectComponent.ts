﻿
module BullShift {
    export abstract class BaseGameObjectComponent implements IGameObjectComponent {
        public name: string;
        public gameObject: GameObject;

        protected _config: IComponentConfig;

        public constructor( config: IComponentConfig ) {
            this.name = config.name;
            this._config = config;
        }

        public abstract initialize( components: IGameObjectComponent ): void;

        public abstract preloading(): boolean;

        public abstract load(): void;

        public abstract update( dt: number ): void;

        public abstract clone(): IGameObjectComponent;
    }
}