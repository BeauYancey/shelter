import type { Time } from "../types/Event";

export const hours: {[key: number]: {open: Time, close: Time}} = {
  [1]: {open: {hours: 10, minutes: 0}, close: {hours: 5, minutes: 0}},
  [2]: {open: {hours: 10, minutes: 0}, close: {hours: 6, minutes: 0}},
  [3]: {open: {hours: 10, minutes: 0}, close: {hours: 5, minutes: 0}},
  [4]: {open: {hours: 10, minutes: 0}, close: {hours: 6, minutes: 0}},
  [5]: {open: {hours: 10, minutes: 0}, close: {hours: 5, minutes: 0}}
}