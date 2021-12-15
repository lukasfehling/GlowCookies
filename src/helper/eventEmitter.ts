import { Observer, Subject, Subscription } from "rxjs";

export class EventEmitter<T> extends Subject<T> {
	emit(value?: T): void {
		super.next(value);
	}

	subscribe (observer?: Partial<Observer<T>>): Subscription {
		return super.subscribe(observer);
	}
}
