"use client";

import { FormEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

type UploadFileModalProps = {
  show: boolean;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (title: string, file: File) => Promise<void>;
};

export function UploadFileModal({ show, isSubmitting, onClose, onSubmit }: UploadFileModalProps) {
  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.trim() || !selectedFile) {
      return;
    }

    await onSubmit(title, selectedFile);
    setTitle("");
    setSelectedFile(null);
  }

  return (
    <Modal show={show} onHide={onClose} centered>
      <Form onSubmit={(event) => void handleSubmit(event)}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить файл</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Название</Form.Label>
            <Form.Control
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Например, Договор с подрядчиком"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Файл</Form.Label>
            <Form.Control
              type="file"
              onChange={(event) => setSelectedFile((event.target as HTMLInputElement).files?.[0] ?? null)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={onClose}>
            Отмена
          </Button>
          <Button type="submit" variant="primary" disabled={isSubmitting || !title.trim() || !selectedFile}>
            {isSubmitting ? "Загрузка..." : "Сохранить"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
