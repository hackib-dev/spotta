export interface CreateReviewModalProps {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  onActionCreateReview: () => void;
  isLoading: boolean;
  isError: boolean;
  reviewOnSubmit: (data: ReviewFormData) => void;
}

export type ReviewFormData = {
  selectedStars: number;
  review: string;
  items: string[];
  anonymous?: boolean | undefined;
};
