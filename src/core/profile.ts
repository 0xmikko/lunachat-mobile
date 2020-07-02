/*
 * Lunachat - sattelite chat based on NuCypher
 * Copyright (c) 2020. Mikhail Lazarev
 */

import {Contact} from './contact';
import {Chat} from './chat';

export interface Profile{
  id: string;
  name: string;
  avatar: string;
  contactsList: Contact[];
  chatsList: Chat[];
}

export interface ProfileChangeNameDTO {
  name: string;
}
