// @flow

import {EVENTS          } from "../enum/EVENTS";
import {EventObject     } from "../events/EventObject";
import {HeightChanged   } from "../events/HeightChanged";
import {Scrolling       } from "../events/Scrolling";
import {ScrollingUp     } from "../events/ScrollingUp";
import {ScrolledUp      } from "../events/ScrolledUp";
import {ScrollingDown   } from "../events/ScrollingDown";
import {ScrolledDown    } from "../events/ScrolledDown";
import {ScrollStarted   } from "../events/ScrollStarted";
import {ScrollStopped   } from "../events/ScrollStopped";
import {Size            } from "../types/Size";
import {Height          } from "../types/Height";
import {Scroll          } from "../types/Scroll";
import {ScrollTo        } from "../events/ScrollTo";

let _instance: Factory | null = null;
const _init = (): Factory => {
    return new Factory();
};

class Factory {

    /**
     * Creates Factory class instance.
     * @return {Factory|null}
     */
    static getInstance(): Factory{

        if (_instance === null) {
            _instance = _init();
        }

        return _instance;
    }

    /**
     * Create event object that will be send to subscribers.
     * @param eventId - Id of the event.
     * @param value   - Value that should be inserted into the event object.
     * @param target  - Target of the event.
     */
    create(eventId : string, // You have to use EVENTS enum here.
           value   : Size,
           target  : Object): EventObject {

        let e = null;

        switch(eventId){
            case EVENTS.HEIGHT_CHANGED:

                if(!(value instanceof Height)) throw new TypeError();
                e = new HeightChanged(value, target);
                break;

            case EVENTS.SCROLLING:

                if(!(value instanceof Scroll)) throw new TypeError();
                e = new Scrolling    (value, target);
                break;

            case EVENTS.SCROLLING_UP:

                if(!(value instanceof Scroll)) throw new TypeError();
                e = new ScrollingUp    (value, target);
                break;

            case EVENTS.SCROLLED_UP:
                if(!(value instanceof Scroll)) throw new TypeError();
                e = new ScrolledUp  (value, target);
                break;

            case EVENTS.SCROLLING_DOWN:

                if(!(value instanceof Scroll)) throw new TypeError();
                e = new ScrollingDown(value, target);
                break;

            case EVENTS.SCROLLED_DOWN:

                if(!(value instanceof Scroll)) throw new TypeError();
                e = new ScrolledDown(value, target);
                break;

            case EVENTS.SCROLL_STARTED:

                if(!(value instanceof Scroll)) throw new TypeError();
                e = new ScrollStarted(value, target);
                break;

            case EVENTS.SCROLL_STOPPED:

                if(!(value instanceof Scroll)) throw new TypeError();
                e = new ScrollStopped(value, target);
                break;

            case EVENTS.SCROLL_TO:
                if(!(value instanceof Scroll)) throw new TypeError();
                e = new ScrollTo(value, target);
                break;

            default:
                throw new Error ("Wrong event ID= " + eventId +". Event" +
                        "object wasn't create.'");
        }

        return e;
    }
}

const EventFactory = Factory.getInstance();

export {EventFactory};



