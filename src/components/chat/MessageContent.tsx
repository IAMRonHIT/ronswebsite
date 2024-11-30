import React from 'react';
import { Building2 } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { MessageContentProps } from './types';
import { cn } from '../../utils/cn';

export const MessageContent: React.FC<MessageContentProps> = ({ message, onOptionSelect }) => (