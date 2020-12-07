//@ts-nocheck
import { type } from 'ramda';

export const isDate = (date: any): boolean => type(date) === "Date";