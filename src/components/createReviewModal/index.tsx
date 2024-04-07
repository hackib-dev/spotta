"use client";

import React, { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { CreateReviewModalProps } from "./types";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaChevronDown } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import StarRating from "../ui/star-rating";
import { Textarea } from "@/components/ui/textarea";

export const CreateReviewModal: FC<CreateReviewModalProps> = ({
  isOpen,
  onClose,
  isLoading = false,
  isError = false,
  onActionCreateReview,
  reviewOnSubmit,
}) => {
  const categories = [
    { id: "1", name: "Parking Lot" },
    { id: "2", name: "Nightlife" },
    { id: "3", name: "Hospitals" },
    { id: "4", name: "Adult Home" },
    { id: "5", name: "Schools" },
    { id: "6", name: "Free Wi-Fi" },
    { id: "7", name: "Pet Store" },
    { id: "8", name: "Childcare" },
    { id: "9", name: "Gym" },
    { id: "10", name: "Security" },
    { id: "11", name: "Parking Lot" },
    { id: "12", name: "Nightlife" },
    { id: "13", name: "Hospitals" },
    { id: "14", name: "Adult Home" },
    { id: "15", name: "Schools" },
    { id: "16", name: "Free Wi-Fi" },
    { id: "17", name: "Pet Store" },
    { id: "18", name: "Childcare" },
    { id: "19", name: "Gym" },
    { id: "20", name: "Security" },
    { id: "21", name: "Parking Lot" },
    { id: "22", name: "Nightlife" },
    { id: "23", name: "Hospitals" },
    { id: "24", name: "Adult Home" },
    { id: "25", name: "Schools" },
  ];

  const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
    anonymous: z.boolean().default(false).optional(),
    review: z.string().min(10, {
      message: "Bio must be at least 10 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });

  const defaultValues = {
    items: [],
    anonymous: false,
    review: "",
  };

  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarChange = (stars: React.SetStateAction<number>) => {
    setSelectedStars(stars);
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = {
      ...data,
      selectedStars: selectedStars,
    };
    console.log(formData);
    reviewOnSubmit(formData);

    onClose();

    toast({
      variant: "success",
      description: "Review submitted",
    });

    form.reset(defaultValues);
    setSelectedStars(0);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] dark:bg-brand-dark">
        <DialogHeader className="mb-6">
          <p className="font-medium text-center text-lg">Review Location</p>
          <p className="font-medium text-[15px] md:text-xl mt-4">
            Bonny and Clyde Street, Ajao Estate, Lagos
          </p>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="items"
              render={() => (
                <>
                  <Popover>
                    <PopoverTrigger asChild className="w-full">
                      <Button
                        variant="outline"
                        className="flex justify-between items-center dark:bg-brand-dark"
                      >
                        Select Amenities
                        <div>
                          <FaChevronDown
                            width={10}
                            className="text-[#8F95B2]"
                          />
                        </div>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full grid grid-cols-1 md:grid-cols-5 gap-x-0 md:gap-x-4 dark:bg-brand-dark">
                      {categories.map((category) => (
                        <>
                          <FormField
                            key={category.id}
                            control={form.control}
                            name="items"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={category.id}
                                  className="flex items-center gap-4 w-svw md:w-full "
                                >
                                  <FormControl>
                                    <Checkbox
                                      className="mt-2"
                                      checked={field.value?.includes(
                                        category.id
                                      )}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              category.id,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== category.id
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal ">
                                    {category.name}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        </>
                      ))}
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </>
              )}
            />
            <div>
              <p className="text-sm font-medium mb-3">Rate location</p>
              <StarRating
                totalStars={5}
                handleStarClick={handleStarChange}
                selectedStars={selectedStars}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="review"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Write Review</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Placeholder"
                        className="resize-none dark:bg-[#171717]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="anonymous"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Post as Anonymous</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <Button type="submit" className="dark:text-white">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
